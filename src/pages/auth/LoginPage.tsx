// src/pages/auth/AuthPage.tsx
import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const { session } = useAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  // Manejar el Magic Link al montar
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token_hash = params.get('token_hash');
    const type = params.get('type');

    if (token_hash) {
      setLoading(true);
      supabase.auth.verifyOtp({ token_hash, type: (type as any) || 'email' })
        .then(({ error }) => {
          if (error) setAuthError(error.message);
          setLoading(false);
        });
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin + '/login' },
    });
    
    if (error) alert(error.message);
    else alert('¡Revisa tu correo!');
    setLoading(false);
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="auth-container">
      <h1>Autenticación</h1>
      {authError && <p className="error">{authError}</p>}
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Tu email"
          required 
        />
        <button type="submit" disabled={loading}>Enviar Link Mágico</button>
      </form>
    </div>
  );
};

export default LoginPage;