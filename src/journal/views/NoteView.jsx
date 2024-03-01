import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light'> 28 de august, 2023 </Typography>
            </Grid>
            <Grid item>
                <Button variant="outlined" sx={{ paddingInline: 2, paddingBlock: 1 }}>
                    <SaveOutlined sx={{ fontSize: 20, mr: 1 }} />
                    Save
                </Button>
            </Grid>

            <Grid container >
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Input a Title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField
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

            {/*  Image Gallery  */}
            <ImageGallery />
        </Grid>
    )
}