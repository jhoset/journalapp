import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"

export const JournalApp = () => {
    const { isSaving, active } = useSelector(state => state.journal)
    const dispatch = useDispatch();

    const onNewNote = () => {
        dispatch(startNewNote())
    }


    return (
        <JournalLayout>

            {
                (active) ?
                    <NoteView />
                    : <NothingSelectedView />
            }

            {/* <NoteView /> */}

            <IconButton
                disabled={isSaving}
                onClick={onNewNote}
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