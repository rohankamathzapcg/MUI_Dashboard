import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';


const StyledModal = styled(Modal)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    gap: "10px"
}))

const AddPost = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title="Add Post" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color='primary' aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={400} p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
                    <Typography variant='h6' color='gray' sx={{ fontFamily: `'Merriweather', serif` }} textAlign={'center'}>Create Post</Typography>
                    <UserBox>
                        <Avatar src="https://pics.craiyon.com/2023-10-25/b65f72d6d11a48c1bc560059cc36e31f.webp" sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant='span' sx={{ fontFamily: `'Merriweather', serif` }}>Son Goku</Typography>
                    </UserBox>
                    <TextField
                        sx={{
                            width: "100%",
                            "& .MuiInputBase-input": {
                                fontFamily: `'Merriweather', serif`,
                            },
                            "& .MuiInputLabel-root": {
                                fontFamily: `'Merriweather', serif`,
                            },
                        }}
                        id="outlined-multiline-static"
                        label="Post content here"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup variant='contained' aria-label="outlined primary button group">
                        <Button sx={{ width: "300px", fontFamily: `'Merriweather', serif` }}>Post</Button>
                        <Button><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
}

export default AddPost;
