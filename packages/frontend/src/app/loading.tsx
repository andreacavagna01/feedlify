import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <Skeleton animation="wave" variant="rectangular" width={210} height={60} />
  }