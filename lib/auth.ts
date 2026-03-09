// Fungsi untuk menyimpan data user setelah login
export const setUserAuth = (userData: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(userData));
    // Gunakan cookie juga untuk middleware
    document.cookie = `authToken=${userData.token}; path=/; max-age=86400`;
  }
};

// Fungsi untuk mengambil data user
export const getUserAuth = () => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  return null;
};

// Fungsi untuk logout
export const logoutUser = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
    document.cookie = 'authToken=; path=/; max-age=0';
    window.location.href = '/sign-in';
  }
};

// Fungsi untuk cek apakah user sudah login
export const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('user') !== null;
  }
  return false;
};
