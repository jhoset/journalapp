import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import PropTypes from "prop-types"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal"

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const newTitle = useMemo(() => {
        return title.length > 15 ? title.substring(0, 15) + '...' : title
    }, [title])

    const newBody = useMemo(() => {
        return body.length > 35 ? body.substring(0, 35) + '...' : body
    }, [body])


    const onSelectNote = () => {
        dispatch(setActiveNote({ id, title, body, date, imageUrls }))
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onSelectNote} >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container direction="column">
                    <ListItemText primary={newTitle || 'N/A'} />
                    <ListItemText secondary={newBody || 'N/A'} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}

SideBarItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.any,
    imageUrls: PropTypes.any,
}