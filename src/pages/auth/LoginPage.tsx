import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../utils/supabaseClient';
import { useAuth } from '../../context/AuthContext';

import violetLogo from '../../assets/logos/square-image-2.png';

const LoginPage = () => {
  const { session } = useAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  const hasRun = useRef(false);

  // Manejar el Magic Link al montar
  useEffect(() => {
    // 1. Verificar si hay errores en el fragmento (#) de la URL (Supabase los manda ahí en fallos)
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const errorDescription = hashParams.get('error_description');
    if (errorDescription) {
      setAuthError(decodeURIComponent(errorDescription.replace(/\+/g, ' ')));
      return;
    }

    // 2. Limpiar el fragmento de la URL si no hay error (estético)
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // 3. Manejar el Magic Link (token_hash)
    const params = new URLSearchParams(window.location.search);
    const token_hash = params.get('token_hash');
    const type = params.get('type');

    if (token_hash && !hasRun.current) {
      hasRun.current = true;
      setLoading(true);

      supabase.auth.verifyOtp({ token_hash, type: (type as any) || 'email' })
        .then(({ error }) => {
          if (error) {
            setAuthError(error.message);
          }
          setLoading(false);
        });
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    setLoading(true);
    setAuthError(null); // Limpiar errores previos

    const redirectUrl = import.meta.env.VITE_SITE_URL || window.location.origin;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        // Asegúrate de que esta URL esté permitida en tu Dashboard de Supabase (Authentication -> URL Configuration)
        emailRedirectTo: redirectUrl
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
          className="mx-auto h-30 w-auto bg-transparent"
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