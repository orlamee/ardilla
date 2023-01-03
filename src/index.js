import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import './index.css';
import App from "./App";
import ScrollToTop from "./js/scrollTop";
import CompleteProfileDetails from "./pages/completeProfile";
import ErrorPage from "./pages/error404";
import LoginPage from "./pages/login";
import Otp from "./pages/otp";
import SecurityQuestion from "./pages/securityQuestion";
import SignUp from "./pages/signUp";
import reportWebVitals from "./reportWebVitals";

import ProtectRoute from "./components/protectRoute";
import GuestRoute from "./components/guestRoute";
import ForgotPassword from "./pages/forgotPassword";
import SetPassword from "./pages/setPassword";
import Learn from "./pages/learn";
import Alerts from "./components/alerts/alerts";
import DashboardMain from "./dashboard/dashboard";
import AnswerQuestion from "./pages/answerSecurity";
import Portfolio from "./dashboard/portfolio";
import VerifyMobile from "./pages/phoneVerify";
import Pin from "./pages/createPin";
import KycVerify from "./pages/kycVerify";
import Savings from "./dashboard/savings";
import FlexPlan from "./dashboard/flexPlan";
import CreateFlexPlan from "./dashboard/createFlexPlan";
import FlexSpend from "./dashboard/flexSpend";
import FlexType from "./dashboard/flexType";
import TargetPlan from "./dashboard/targetPlan";
import CreateTargetPlan from "./dashboard/createTargetPlan";
import TargetEarn from "./dashboard/targetEarn";
import TargetSpend from "./dashboard/targetSpend";
import TargetType from "./dashboard/targetType";
import TargetDashboard from "./dashboard/targetDashboard";
import FlexDashboard from "./dashboard/flexDashboard";
// import FlexSave from "./dashboard/flexSave";
import TargetSave from "./dashboard/targetSave";
import FlexSetAmount from "./dashboard/flexSetAmount";
import FlexSetSave from "./dashboard/flexSave";
import FlexSetDuration from "./dashboard/flexSetDuration";
import FlexSuccess from "./dashboard/flexSetSave";
import FlexOverview from "./dashboard/flexOverview";
import TargetPrefer from "./dashboard/targetPrefer";
import TargetPublicSelection from "./dashboard/targetPublicSelection";
import TargetDesc from "./dashboard/targetDesc";
import TargetPlanShare from "./dashboard/targetPlanShare";
import TargetSetAmount from "./dashboard/targetSetAMount";
import TargetSetSave from "./dashboard/targetSetSave";
import TargetSetDuration from "./dashboard/TargetSetDuration";
import TargetCustomSave from "./dashboard/targetCustomSave";
import FlexOverviewTopped from "./dashboard/flexOverviewTopped";
import FlexOverviewSan from "./dashboard/flexOverviewSan";
import FlexOverviewCard from "./dashboard/flexOverviewCard";
import TargetOverview from "./dashboard/targetOverview";
import TargetOverviewSan from "./dashboard/targetOverviewSan";
import TargetOverviewCard from "./dashboard/targetOverviewCard";
import DillaMain from "./dashboard/dilla";
import Ot from "./pages/newOtp";
import LearnMain from "./dashboard/learn";
import LearnBlog from "./dashboard/learnBlog";
import LearnQuizes from "./dashboard/learnQuizes";
import LearnProfiles from "./dashboard/learnProfiles";
import ReadBlog from "./dashboard/learnReadBlog";
import TargetPlanPrivate from "./dashboard/targetPlanPrivate";
import Profile from "./dashboard/profile";
import Security from "./dashboard/profileSecurity";
import ProfileGetHelp from "./dashboard/profileGetHelp";
import ProfileAccountSettings from "./dashboard/profileAccountSettings";
import ProfileRefer from "./dashboard/profileRefer";
import KYC from "./dashboard/profileKYC";
import Payment from "./dashboard/payment";
import ExplorePage from "./dashboard/explorePage";
import Explore from "./dashboard/explore";
import Vault from "./dashboard/vault";
import CreateVault from "./dashboard/createVault";
import EarnVault from "./dashboard/vaultPlanEarn";
import SpendVault from "./dashboard/vaultPlanSpend";
import VaultType from "./dashboard/vaultPlanType";
import DashboardVault from "./dashboard/vaultPlanDashboard";
import VaultSetSave from "./dashboard/vaultPlanSave";
import VaultOverview from "./dashboard/vaultOverview";
import VaultPlanSet from "./dashboard/vaultPlanSet";
import SetSaveVault from "./dashboard/vaultPlanSetSave";
import VaultPlanSetDuration from "./dashboard/vaultPlanSetDuration";
import CustomSaveVault from "./dashboard/vaultCustomSave";
import CustomVault from "./dashboard/customVaultPlanDashboard";
import DashboardFlexPlan from "./dashboard/dashboardFlexPlan";
import VaultDash from "./dashboard/dashboardVaultPlan";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/alerts" element={<Alerts />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/learn-more" element={<Learn />}></Route>
      <Route path="/security" element={<AnswerQuestion />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route
        path="/verify-mobile"
        element={
          <GuestRoute>
            <VerifyMobile />
          </GuestRoute>
        }
      ></Route>
      <Route
        path="/set-pin"
        element={
          <GuestRoute>
            <Pin />
          </GuestRoute>
        }
      ></Route>
      <Route path="/bvn-verify" element={<KycVerify />}></Route>
      <Route
        path="/dashboard"
        element={
          <ProtectRoute>
            <DashboardMain />
          </ProtectRoute>
        }
      ></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/savings" element={<Savings />}></Route>
      <Route path="/create-flex" element={<CreateFlexPlan />}></Route>
      <Route path="/flex-spend" element={<FlexSpend />}></Route>
      <Route path="/flex-type" element={<FlexType />}></Route>
      <Route path="/target-type" element={<TargetType />}></Route>
      <Route path="/target-dashboard" element={<TargetDashboard />}></Route>
      <Route path="/flex-dashboard" element={<FlexDashboard />}></Route>
      <Route path="/flex-success" element={<FlexSuccess />}></Route>
      <Route path="/flex-set-amount" element={<FlexSetAmount />}></Route>
      <Route path="/flex-set-duration" element={<FlexSetDuration />}></Route>
      <Route path="/flex-overview" element={<FlexOverview />}></Route>
      <Route path="/flex-savings" element={<FlexSetSave />}></Route>
      <Route path="/target-save" element={<TargetSave />}></Route>
      <Route path="/flex-plan" element={<FlexPlan />}></Route>
      <Route path="/target-plan" element={<TargetPlan />}></Route>
      <Route path="/create-target" element={<CreateTargetPlan />}></Route>
      <Route path="/target-earn" element={<TargetEarn />}></Route>
      <Route path="/target-spend" element={<TargetSpend />}></Route>
      <Route path="/recover-password" element={<ForgotPassword />}></Route>
      <Route path="/set-password/:id" element={<SetPassword />}></Route>

      <Route path="/target-prefer" element={<TargetPrefer/>}></Route>
      <Route path="/target-public-selection" element={<TargetPublicSelection/>}></Route>
      <Route path="/target-public-desc" element={<TargetDesc/>}></Route>
      <Route path="/target-share-link" element={<TargetPlanShare/>}></Route>
      <Route path="/target-set-amount" element={<TargetSetAmount/>}></Route>
      <Route path="/target-set-save" element={<TargetSetSave/>}></Route>
      <Route path="/target-set-duration" element={<TargetSetDuration/>}></Route>
      <Route path="/target-custom-save" element={<TargetCustomSave/>}></Route>
      <Route path="/flex/top-up" element={<FlexOverviewTopped/>}></Route>
      <Route path="/flex-overview/san" element={<FlexOverviewSan/>}></Route>
      <Route path="/flex-overview/card" element={<FlexOverviewCard/>}></Route>
      <Route path="/target-overview" element={<TargetOverview/>}></Route>
      <Route path="/target-overview/san" element={<TargetOverviewSan/>}></Route>
      <Route path="/target-overview/card" element={<TargetOverviewCard/>}></Route>
      <Route path="/target-private" element={<TargetPlanPrivate/>}></Route>
      <Route path="/target-private/explore" element={<Explore/>}></Route>
      
      <Route path="/ot" element={<Ot/>}></Route>

      
      <Route path="/dilla" element={<DillaMain/>}></Route>
      <Route path="/learn" element={<LearnMain/>}></Route>
      <Route path="/learn/article" element={<LearnBlog/>}></Route>
      <Route path="/learn/quiz" element={<LearnQuizes/>}></Route>
      <Route path="/learn/profile" element={<LearnProfiles/>}></Route>
      <Route path="/article/read-article" element={<ReadBlog/>}></Route>

    
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/profile/security" element={<Security/>}></Route>
      <Route path="/profile/get-help" element={<ProfileGetHelp/>}></Route>
      <Route path="/profile/account" element={<ProfileAccountSettings/>}></Route>
      <Route path="/profile/referral" element={<ProfileRefer/>}></Route>
      <Route path="/profile/kyc" element={<KYC/>}></Route>

      <Route path="/payment" element={<Payment/>}></Route>
      <Route path="/explore" element={<ExplorePage/>}></Route>
      <Route path="/vault" element={<Vault/>}></Route>
      <Route path="/create-vault" element={<CreateVault/>}></Route>
      <Route path="/vault-earn" element={<EarnVault/>}></Route>
      <Route path="/vault-spend" element={<SpendVault/>}></Route>
      <Route path="/vault-type" element={<VaultType/>}></Route>
      <Route path="/vault-dashboard" element={<DashboardVault/>}></Route>
      <Route path="/vault-save" element={<VaultSetSave/>}></Route>
      <Route path="/vault-overview" element={<VaultOverview/>}></Route>
      <Route path="/vault-set-amount" element={<VaultPlanSet/>}></Route>
      <Route path="/vault-set-save" element={<SetSaveVault/>}></Route>
      <Route path="/vault-set-duration" element={<VaultPlanSetDuration/>}></Route>
      <Route path="/vault-custom-save" element={<CustomSaveVault/>}></Route>
      <Route path="/custom-vault" element={<CustomVault/>}></Route>
      <Route path="/flexplan-dashboard" element={<DashboardFlexPlan/>}></Route>
      <Route path="/vaultplan-dashboard" element={<VaultDash/>}></Route>





      

      {/* <Route path="/dilla" element={<DillaMain />}></Route>
      <Route path="/learn" element={<LearnMain />}></Route>
      <Route path="/learn/article" element={<LearnBlog />}></Route> */}

      <Route
        path="/otp"
        element={
          <GuestRoute>
            <Otp />
          </GuestRoute>
        }
      ></Route>
      <Route
        path="/security-question"
        element={
          <GuestRoute>
            <SecurityQuestion />
          </GuestRoute>
        }
      ></Route>
      <Route
        path="/complete-profile"
        element={
          <GuestRoute>
            <CompleteProfileDetails />
          </GuestRoute>
        }
      ></Route>
      <Route path="/404" element={<ErrorPage />}></Route>
      <Route path="*" element={<Navigate to="/404" replace />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
