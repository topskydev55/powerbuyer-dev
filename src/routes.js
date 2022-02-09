import { createRouter, createWebHistory } from "vue-router";
//App Pages
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Login.vue";
import Auctions from "@/views/Auctions.vue";
import Auction from "@/views/Auction.vue";
import Buyers from "@/views/Buyers.vue";
import Buyer from "@/views/Buyer.vue";
import Lenders from "@/views/Lenders.vue";
import Lender from "@/views/Lender.vue";
import Inventory from "@/views/Inventory.vue";
import Vehicle from "@/views/Vehicle.vue";
import Vendors from "@/views/Vendors.vue";
import Vendor from "@/views/Vendor.vue";
import Dealers from "@/views/Dealers.vue";
import Dealer from "@/views/Dealer.vue";
import Lanes from "@/views/Lanes.vue";
import LanesHistory from "@/views/LanesHistory.vue";
import LanesManage from "@/views/LanesManage.vue";
import Deals from "@/views/Deals.vue";
import Deal from "@/views/Deal.vue";
import VendorHome from "@/components/vendor/VendorHome.vue";

export const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/auctions",
      name: "Auctions",
      component: Auctions,
    },
    {
      path: "/auction",
      name: "Auction",
      component: Auction,
    },
    {
      path: "/buyers",
      name: "Buyers",
      component: Buyers,
    },
    {
      path: "/buyer",
      name: "Buyer",
      component: Buyer,
    },
    {
      path: "/lenders",
      name: "Lenders",
      component: Lenders,
    },
    {
      path: "/lender",
      name: "Lender",
      component: Lender,
    },
    {
      path: "/inventory",
      name: "Inventory",
      component: Inventory,
    },
    {
      path: "/vendors",
      name: "Vendors",
      component: Vendors,
      children: [
        {
          path: "",
          name: "VendorHome",
          component: VendorHome,
        },
        {
          path: ":id",
          name: "SingleVendor",
          component: Vendor,
        },
      ],
    },
    {
      path: "/dealers",
      name: "Dealers",
      component: Dealers,
    },
    {
      path: "/dealer",
      name: "Dealer",
      component: Dealer,
    },
    {
      path: "/lanes",
      name: "Lanes",
      component: Lanes,
    },
    {
      path: "/lanes-history",
      name: "Lanes history",
      component: LanesHistory,
    },
    {
      path: "/lanes-manage",
      name: "Lanes Manage",
      component: LanesManage,
    },
    {
      path: "/deals",
      name: "Deals",
      component: Deals,
    },
    {
      path: "/deal",
      name: "Deal",
      component: Deal,
    },
    {
      path: "/vehicle",
      name: "Vehicle",
      component: Vehicle,
    },
  ],
});