import { CancelOutlined, CheckCircleOutlined, CloseOutlined, InfoOutlined, WarningAmberOutlined } from "@mui/icons-material";
import { Card, CardHeader, IconButton } from "@mui/material";
import { IToastProps } from "@typesrc/components/shared/Toast";
import { Variants, motion } from "framer-motion";

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2
        }
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            duration: 0.2
        }
    }
}

const MotionCard = motion(Card);

export default function Toast({
    toast
}: IToastProps) {

    function getIcon() {
        switch (toast.type) {
            case "info":
                return <InfoOutlined />
            case "success":
                return <CheckCircleOutlined color="success" />
            case "warning":
                return <WarningAmberOutlined color="warning" />
            case "error":
                return <CancelOutlined color="error" />
            default:
                return <InfoOutlined />
        }
    }

    return (
        <MotionCard
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={cardVariants}
            layout
            className="w-full md:w-96 pointer-events-auto"
        >
            <CardHeader
                avatar={getIcon()}
                title={toast.message}
                titleTypographyProps={{
                    variant: "body2",
                    color: "textPrimary"
                }}
                action={
                    toast.dismissable ?
                        <IconButton onClick={() => toast.onDismiss?.(toast.id)} size="large">
                            <CloseOutlined />
                        </IconButton>
                        :
                        null
                }
            />
        </MotionCard>
    )
}