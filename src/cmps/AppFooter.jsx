import { useSelector } from 'react-redux'
import { UserMsg } from './UserMsg.jsx'

export function AppFooter() {
    const count = useSelector(storeState => storeState.userModule.count) || 0

    return (
        <footer className="app-footer">
            <p>
                © 2024 InstaMode. All rights reserved. | Users count: {count}
            </p>
            <UserMsg />
        </footer>
    )
}
