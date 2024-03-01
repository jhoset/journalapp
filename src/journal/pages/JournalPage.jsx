import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalApp = () => {
    return (
        <JournalLayout>
            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'purple',
                    ':hover': { backgroundColor: 'purple', opacity: 0.9 },
                    transition: 'ease-in-out',
                    transitionDuration: '250ms',
                    position: 'fixed',
                    right: 50,
                    bottom: 55
                }}>
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>

    )
}