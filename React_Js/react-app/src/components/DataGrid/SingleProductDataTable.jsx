import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Grid, CardMedia, Skeleton, Button } from "@mui/material";
import { useParams } from "react-router-dom"; // Change the import statement
import { MaterialReactTable } from 'material-react-table';

const SingleProductTable = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Get the product id from the URL

  useEffect(() => {
    // Fetch the product data from the API using the id
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        // Set the product state with the response data
        setProduct(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error("There was an error fetching the data:", error);
      });
  }, [id]); // Add id as a dependency to re-run the effect when it changes

  // Define columns for the table
  const columns = useMemo(() => [
    {
      accessorKey: 'property',
      header: 'Property',
    },
    {
      accessorKey: 'value',
      header: 'Value',
    },
  ], []);

  // Modify product properties to include dollar sign and percentage sign
  const modifiedProduct = useMemo(() => {
    if (product) {
      return Object.entries(product).map(([key, value]) => ({
        property: key,
        value: key === "price" ? `$${value}` : key === "discountPercentage" ? `${value}%` : value
      })).slice(0, -2); // Remove the last two rows
    }
    return [];
  }, [product]);

  // Return either the product details or a skeleton loading component
  return (
    <Grid container justifyContent={"center"} spacing={10} marginTop={15}>
      <Grid item xs={12} sm={10} md={8} lg={6} sx={{ mr: 4, ml: 4 }}>
        <Button onClick={() => window.history.back()} variant="outlined" sx={{ marginBottom: 2 }}>
          Back
        </Button>
        {product ? (
          <>
            <CardMedia
              component="img"
              height="375"
              image={product.thumbnail}
              alt={product.title}
              sx={{ width: '100%', marginBottom: 2 }} 
            />
            <MaterialReactTable
              columns={columns}
              data={modifiedProduct}
              enableColumnActions={false}
              enableColumnFilters={false}
              enablePagination={false}
              enableSorting={false}
              renderCaption={({ table }) => `Product Details (${table.getRowModel().rows.length})`}
            />
          </>
        ) : (
          <Skeleton variant="rectangular" width="100%" height={375} />
        )}
      </Grid>
    </Grid>
  );
};

export default SingleProductTable;
