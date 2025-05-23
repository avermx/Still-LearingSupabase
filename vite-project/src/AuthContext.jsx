import { useState, useEffect, createContext, useContext } from "react";
import { supabase } from "./Supabase-client";

const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {
    const [session, setSession] = useState(undefined)

    //signUp

    const signUpNewUser = async (email,password) => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        if (error) {
            console.error("There was a problem signingUp:", error)
            return { success: false, error };
        }
        return { success: true, data };
    }

    //signIn
    const signInUser = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if (error) {
            console.error("There was a problem signIn:", error)
            return { success: false, error: error.message };
        }
        return { success: true, data };
    }

    useEffect(() => {
        supabase.auth.getSession().then(({ data: session }) => {
            setSession(session)
        })
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    //signOut 
    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("There was a problem signOut:", error)
        }

    }

        return (
            <AuthContext.Provider value={{ session, signUpNewUser, signInUser, signOut }}>
                {children}
            </AuthContext.Provider>
        )
    }

    export const UserAuth = () => {
        return useContext(AuthContext)
    }
