import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, IconButton, Typography, MenuItem, Select } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
// import { data } from './makeData'; // Importing mock data

const DataGridTable = () => {
  const [products, setProducts] = useState(null);

  // Fetching data from API using axios
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) =>
        console.error("There was an error fetching the data:", error)
      );
  }, []);

  // Define columns for the table
  const columns = useMemo(
    () => [
      {
        id: "product",
        header: "Product",
        columns: [
          {
            accessorKey: "thumbnail",
            header: "Thumbnail",
            size: 100,
            Cell: ({ row }) => (
              <img
                src={row.original.thumbnail}
                alt={row.original.title}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            ),
          },
          {
            accessorFn: (row) => `${row.title}`,
            id: "title",
            header: "Title",
            size: 150,
          },
          {
            accessorKey: "description",
            header: "Description",
            size: 300,
          },
          {
            accessorKey: "price",
            header: "Price",
            size: 100,
          },
          {
            accessorKey: "discountPercentage",
            header: "Discount %",
            size: 100,
          },
          {
            accessorKey: "stock",
            header: "Stock",
            size: 100,
          },
          {
            accessorKey: "rating",
            header: "Rating",
            size: 100,
          },
          {
            accessorKey: "action",
            header: "Action",
            size: 100,
            Cell: ({ row }) => (
              <Select
                value=""
                onChange={() => {}}
                displayEmpty
                sx={{ minWidth: "100px" }}
              >
                <MenuItem
                  value=""
                  component={Link}
                  to={`/products/${row.original.id}`}
                  onClick={() => {}}
                >
                  View Details
                </MenuItem>
                {/* Add more action items here */}
              </Select>
            ),
          },
        ],
      },
    ],
    []
  );

  // Initialize Material React Table
  const table = useMaterialReactTable({
    columns,
    data: products || [], // Pass products data
    enableColumnOrdering: true,
    enableRowSelection: true,
    paginationDisplayMode: "pages",
    muiPaginationProps: {
      color: "primary",
      rowsPerPageOptions: [10, 20, 30],
      shape: "rounded",
      variant: "outlined",
    },
  });

  return (
    <Box>
      <MaterialReactTable
        table={table}
        renderTopToolbar={({ table }) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {table.getIsAnyColumnFiltered() && (
              <Typography variant="body2" color="text.secondary">
                {table.getFilteredRowCount()} / {table.getTotalRowCount()} rows
                filtered
              </Typography>
            )}
            <IconButton
              onClick={() => table.toggleAllRowSelection()}
              color="primary"
              size="large"
            >
              {table.getIsAllRowsSelected() ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Box>
        )}
      />
    </Box>
  );
};

export default DataGridTable;
