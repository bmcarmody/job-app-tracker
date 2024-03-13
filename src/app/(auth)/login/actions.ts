'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '~/utils/supabase/server';

export const login = async (formData: FormData): Promise<void> => {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
};

export const signup = async (formData: FormData): Promise<void> => {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
};

export const logout = async (): Promise<void> => {
  const supabase = createClient();

  await supabase.auth.signOut();

  revalidatePath('/', 'layout');
  redirect('/');
};

export const isAuthed = async (): Promise<boolean> => {
  const supabase = createClient();

  const { data } = await supabase.auth.getSession();

  return Boolean(data.session);
};
