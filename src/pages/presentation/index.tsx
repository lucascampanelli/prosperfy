import { Box, Typography } from "@mui/material";

export default function Presentation() {

    const backgroundImg = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="flex flex-col w-full h-screen md:flex-row">

            <div className="w-1/2 h-screen md:w-full">
                <Box height="100%">
                    <img className="w-full h-full object-cover object-right" 
                         src={backgroundImg}
                    />
                </Box>
            </div>

            <div className="w-1/2 h-full md:w-full">
                <div className="w-full h-full flex justify-center items-center flex-col">
                    <h1>Welcome to Prosperify!</h1>
                    <p>Prosperify is an amazing app for managing personal finances.</p>
                </div>
            </div>

        </div>
    );
}