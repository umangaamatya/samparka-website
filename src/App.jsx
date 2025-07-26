import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

// Import your Layout and Pages
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import SmartReviewStand from './pages/SmartReviewStand';
import PointsEconomy from './pages/PointsEconomy';
import ThreadsNTrendsWhereSneakerCultureFindsItsSole from './pages/ThreadsNTrendsWhereSneakerCultureFindsItsSole';
import EnhanceCustomerLoyaltyWith from './pages/EnhanceCustomerLoyaltyWith';
import SmaparkaLoyaltySolution from './pages/SmaparkaLoyaltySolution';
import TheNewBarberCraftingStyleFromTheGroundUp from './pages/TheNewBarberCraftingStyleFromTheGroundUp';
import BoostYourBusinessWithNFCE from './pages/BoostYourBusinessWithNFCE';
import GetInTouch from './pages/GetInTouch';
import SmartBusinessCard from './pages/SmartBusinessCard';
import TsubakiTransformingBeautyIntoEmpowerment from './pages/TsubakiTransformingBeautyIntoEmpowerment';
import CaffeophiliaForDreamersWithCoffeeInTheir from './pages/CaffeophiliaForDreamersWithCoffeeInTheir';
import PiccoloWhereCoffeeMeetsCommunity from './pages/PiccoloWhereCoffeeMeetsCommunity';
import LoyaltyElevated from './pages/LoyaltyElevated';
import UpgradeYourNetworkingWithS from './pages/UpgradeYourNetworkingWithS';
import MiraBakery from './pages/MiraBakery';

const muiTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* 1. Create a parent route that renders your Layout component */}
          <Route path="/" element={<Layout />}>
            
            {/* 2. Nest your page routes inside. They will now render inside the Layout */}
            <Route index element={<Home />} /> {/* 'index' is the default page for the parent's path ('/') */}
            <Route path="blog" element={<Blog />} />
            <Route path="smart-review-stand" element={<SmartReviewStand />} />
            <Route path="points-economy" element={<PointsEconomy />} />
            <Route path="threads-n-trends-where-sneaker-culture-finds-its-sole" element={<ThreadsNTrendsWhereSneakerCultureFindsItsSole />} />
            <Route path="enhance-customer-loyalty-with" element={<EnhanceCustomerLoyaltyWith />} />
            <Route path="samparka-loyalty-solution" element={<SmaparkaLoyaltySolution />} />
            <Route path="the-new-barber-crafting-style-from-the-ground-up" element={<TheNewBarberCraftingStyleFromTheGroundUp />} />
            <Route path="boost-your-business-with-n-f-c-e" element={<BoostYourBusinessWithNFCE />} />
            <Route path="get-in-touch" element={<GetInTouch />} />
            <Route path="smart-business-card" element={<SmartBusinessCard />} />
            <Route path="tsubaki-transforming-beauty-into-empowerment" element={<TsubakiTransformingBeautyIntoEmpowerment />} />
            <Route path="caffeophilia-for-dreamers-with-coffee-in-their" element={<CaffeophiliaForDreamersWithCoffeeInTheir />} />
            <Route path="piccolo-where-coffee-meets-community" element={<PiccoloWhereCoffeeMeetsCommunity />} />
            <Route path="loyalty-elevated" element={<LoyaltyElevated />} />
            <Route path="upgrade-your-networking-with-s" element={<UpgradeYourNetworkingWithS />} />
            <Route path="mira-bakery" element={<MiraBakery />} />

          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
