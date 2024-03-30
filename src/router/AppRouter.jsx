import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui"
import { useCheckAuth } from "../hooks"



export const AppRouter = () => {

    const { status } = useCheckAuth();

    if (status === 'Checking') {
        return <CheckingAuth />
    }
    return (
        <Routes>

            {
                (status === 'Authenticated')
                    ? <Route path="/*" element={<JournalRoutes />} />
                    : <Route path="/auth/*" element={<AuthRoutes />} />
            }
            <Route path="/*" element={<Navigate to={'/auth/login'} />} />
            {/*  Login & Register  */}
            {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
            {/* Journal App */}
            {/* <Route path="/*" element={<JournalRoutes />} /> */}
        </Routes>
    )

}