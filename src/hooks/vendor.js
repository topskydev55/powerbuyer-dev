import { useInfiniteQuery, useQuery } from "vue-query";
import axios from "axios";

export const useVendorCategories = () =>
  useInfiniteQuery(
    "vendorCategory",
    ({ pageParam = 1 }) =>
      axios.get("/vendor_categories?page=" + pageParam).then((res) => res.data),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage, pages) =>
        lastPage.current_page < lastPage.last_page
          ? lastPage.current_page + 1
          : null,
    }
  );
export const getVendors = () =>
  useInfiniteQuery(
    "vendors",
    ({ pageParam = 1 }) =>
      axios.get("/vendors?limit=10&page=" + pageParam).then((r) => r.data),
    {
      getNextPageParam: (lastPage, pages) =>
        lastPage.current_page < lastPage.last_page
          ? lastPage.current_page + 1
          : null,
    }
  );

export const getVendorById = (paramId) =>
  useQuery(["vendor", paramId], () =>
    axios.get(`/vendors/${paramId.value}`).then((res) => res.data)
  );