import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote, startDeletingNote, startSavingNote, startUploadingFiles } from "../../store/journal"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.css"

export const NoteView = () => {
    const dispatch = useDispatch();
    const { active: currentNote, messageSaved, isSaving } = useSelector(state => state.journal)
    const { date, body, title, onInputChange, formState } = useForm(currentNote);

    const fileInputRef = useRef();

    const dateString = useMemo(() => {
        const newDate = new Date(date).toUTCString();
        return newDate;
    }, [date])

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if (messageSaved.trim().length) {
            Swal.fire('Note Updated', messageSaved, 'success');
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSavingNote());
    }

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;

        // console.log("Uploading files...");
        dispatch(startUploadingFiles(target.files))
    }

    const onDelete = () => {
        dispatch(startDeletingNote());
    }

    return (
        <Grid
            className="animate__animated animate__fadeIn animate__faster"
            container direction="row" justifyContent="space-between" alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={28} fontWeight='light'> {dateString} </Typography>
            </Grid>
            <Grid item>

                <input ref={fileInputRef} style={{ display: 'none' }} onChange={onFileInputChange} multiple type="file" />

                <IconButton color="primary" disabled={isSaving} onClick={() => fileInputRef.current.click()} >
                    <UploadOutlined />
                </IconButton>


                <Button disabled={isSaving} onClick={onSaveNote} variant="outlined" sx={{ paddingInline: 2, paddingBlock: 1 }}>
                    <SaveOutlined sx={{ fontSize: 20, mr: 1 }} />
                    Save
                </Button>
            </Grid>

            <Grid container >
                <TextField
                    name="title"
                    value={title}
                    onChange={onInputChange}
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Input a Title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField
                    name="body"
                    value={body}
                    onChange={onInputChange}
                    type="text"
                    variant="filled"
                    multiline
                    fullWidth
                    placeholder="What happened today?"
                    label="What happened today?"
                    sx={{ border: 'none', mb: 1 }}
                    minRows={5}
                />
            </Grid>
            <Grid container justifyContent={'end'} alignItems={'center'}>
                <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
                    <DeleteOutline />
                    Delete
                </Button>
            </Grid>


            {/*  Image Gallery  */}
            <ImageGallery images={currentNote.imageUrls} />
        </Grid>
    )
}