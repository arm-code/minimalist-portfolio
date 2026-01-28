// src/pages/auth/AuthPage.tsx
import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { useAuth } from '../../context/AuthContext';

import violetLogo from '../../assets/logos/arm_solutions_logo_square.png';

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
    e.preventDefault(); // Evita que la página se recargue
    setLoading(true);
    setAuthError(null); // Limpiar errores previos

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { 
        // Asegúrate de que esta URL esté permitida en tu Dashboard de Supabase (Authentication -> URL Configuration)
        emailRedirectTo: window.location.origin + '/login' 
      },
    });

    if (error) {
      setAuthError(error.message);
      alert(error.message);
    } else {
      alert('¡Revisa tu correo! Te hemos enviado un enlace de acceso.');
    }
    setLoading(false);
  };

  if (loading) return <div className="flex min-h-lvh items-center justify-center">Cargando...</div>;

  return (
    <div className="flex min-h-lvh flex-col justify-center px-6 py-12 lg:px-8">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Violet Flame Logo"
          src={violetLogo}
          className="mx-auto h-30 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold">
          Restricted Access - Login
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-center">
        {/* CONEXIÓN: Añadimos onSubmit al formulario */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-violet-900">
              Email address:
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                // CONEXIÓN: Vinculamos el valor y el cambio del input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-violet-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 text-center"
              />
            </div>
          </div>         

          {/* Mostrar error si existe */}
          {authError && (
            <div className="text-red-600 text-sm text-center font-medium">
              {authError}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Magic link'}
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default LoginPage;