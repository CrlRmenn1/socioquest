import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  department: string;
  isAdmin: boolean;
  points: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, isAdmin: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string, isAdmin: boolean) => {
    // Mock login - in real app, this would call an API
    if (isAdmin) {
      setUser({
        id: "admin-1",
        name: "Admin User",
        email: email,
        department: "All Departments",
        isAdmin: true,
        points: 0,
      });
    } else {
      // Regular user - assign to Finance department for demo
      setUser({
        id: "user-" + Math.random().toString(36).substr(2, 9),
        name: "Juan Dela Cruz",
        email: email,
        department: "Finance",
        isAdmin: false,
        points: 1250,
      });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
