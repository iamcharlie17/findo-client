import { Pagination, Stack } from "@mui/material";

const PaginationComponent = ({numberOfPages, page, handlePageChange}) => {
    return (
      <Stack spacing={2}>
        <Pagination
          count={numberOfPages}
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    );
  };

export default PaginationComponent;