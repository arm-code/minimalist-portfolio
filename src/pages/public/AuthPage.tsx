import './AuthPageStyles.css';
import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { Session } from '@supabase/supabase-js';

export const AuthPage = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [session, setSession] = useState<Session | null>(null);

    // Check URL params on initial render
    const params = new URLSearchParams(window.location.search);
    const hasTokenHash = params.get('token_hash');

    const [verifying, setVerifying] = useState(!!hasTokenHash);
    const [authError, setAuthError] = useState<string | null>(null);
    const [authSuccess, setAuthSuccess] = useState(false);

    useEffect(() => {
        // Check if we have token_hash in URL (magic link callback)
        const params = new URLSearchParams(window.location.search);
        const token_hash = params.get('token_hash');
        const type = params.get('type');

        if (token_hash) {
            // Verify the OTP token
            supabase.auth
                .verifyOtp({
                    token_hash,
                    type: (type as any) || 'email',
                })
                .then(({ error }) => {
                    if (error) {
                        setAuthError(error.message);
                    } else {
                        setAuthSuccess(true);
                        // Clear URL params
                        window.history.replaceState({}, document.title, '/');
                    }
                    setVerifying(false);
                });
        }

        // Check for existing session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: window.location.origin,
            },
        });
        if (error) {
            alert(error.message);
        } else {
            alert('Check your email for the login link!');
        }
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setSession(null);
    };

    // Show verification state
    if (verifying) {
        return (
            <div className="auth-page">
                <div className="auth-container">
                    <h1>Authentication</h1>
                    <p className="auth-message">Confirming your magic link...</p>
                    <div className="loading-spinner">Loading...</div>
                </div>
            </div>
        );
    }

    // Show auth error
    if (authError) {
        return (
            <div className="auth-page">
                <div className="auth-container">
                    <h1>Authentication</h1>
                    <p className="auth-error">✗ Authentication failed</p>
                    <p className="error-message">{authError}</p>
                    <button
                        className="auth-button"
                        onClick={() => {
                            setAuthError(null);
                            window.history.replaceState({}, document.title, '/');
                        }}
                    >
                        Return to login
                    </button>
                </div>
            </div>
        );
    }

    // Show auth success (briefly before session loads)
    if (authSuccess && !session) {
        return (
            <div className="auth-page">
                <div className="auth-container">
                    <h1>Authentication</h1>
                    <p className="auth-success">✓ Authentication successful!</p>
                    <p className="auth-message">Loading your account...</p>
                </div>
            </div>
        );
    }

    // If user is logged in, show welcome screen
    if (session) {
        return (
            <div className="auth-page">
                <div className="auth-container">
                    <h1>Welcome!</h1>
                    <p className="welcome-message">
                        You are logged in as: <strong>{session.user.email}</strong>
                    </p>
                    <button className="auth-button logout-button" onClick={handleLogout}>
                        Sign Out
                    </button>
                </div>
            </div>
        );
    }

    // Show login form
    return (
        <div className="auth-page" id="authPage">
            <div className="auth-container">
                <h1>Authentication</h1>
                <p className="auth-subtitle">Sign in via magic link with your email</p>
                <form onSubmit={handleLogin} className="auth-form">
                    <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                        className="auth-input"
                    />
                    <button disabled={loading} className="auth-button submit-button">
                        {loading ? <span>Loading...</span> : <span>Send magic link</span>}
                    </button>
                </form>
            </div>
        </div>
    );
};
