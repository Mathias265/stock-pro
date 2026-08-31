import { useState, useRequestURL, navigateTo } from "#app";

export const useAuth = () => {
  const supabase = useDb();
  const user = useState<any>("user", () => null);

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    user.value = data.user;
    return data;
  };

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data;
  };

  const signInWithGoogle = async () => {
    // 1. FIXED: Compute redirect paths safely ensuring callback compatibility
    const url = useRequestURL();
    const redirectTarget = process.client
      ? `${window.location.origin}/dashboard`
      : `${url.origin}/dashboard`;

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectTarget,
        // 2. FIXED: Forces Google to show the email account chooser selection panel every single time
        queryParams: {
          access_type: "offline",
          prompt: "select_account",
        },
      },
    });
    if (error) throw error;
    return data;
  };

  const signInWithGitHub = async () => {
    const url = useRequestURL();
    const redirectTarget = process.client
      ? `${window.location.origin}/dashboard`
      : `${url.origin}/dashboard`;

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: redirectTarget },
    });
    if (error) throw error;
    return data;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    user.value = null;
    await navigateTo("/");
  };

  const initUser = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      user.value = data.session?.user ?? null;
      supabase.auth.onAuthStateChange((_event, session) => {
        user.value = session?.user ?? null;
      });
    } catch (err) {
      console.error("initUser error:", err);
    }
  };

  return {
    user,
    signUp,
    signIn,
    signInWithGitHub,
    signInWithGoogle,
    signOut,
    initUser,
  };
};
