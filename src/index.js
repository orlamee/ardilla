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

// import ProtectRoute from "./components/protectRoute";
// import GuestRoute from "./components/guestRoute";
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
import PortfolioSavings from "./dashboard/savingsPortfolio";
import KYCReview from "./dashboard/reviewKYC";
import KYCFailed from "./dashboard/failedKYC";
import KYCCompleted from "./dashboard/completeKYC";
import Save from "./pages/save";
import DillaWallet from "./pages/dillaWallet";
import AboutUsPage from "./pages/aboutUs";
import DownloadApp from "./pages/downloadApp";
import RankPage from "./dashboard/rankPage";
import TermsCondition from "./pages/termsCondition";
import InformationSecurity from "./pages/informationSecurity";
import PrivacyPolicy from "./pages/privacyPolicy";
import PaymentA from "./dashboard/accountPayment";
import PaymentASuccess from "./dashboard/accountPaymentSuccess";
import PaymentC from "./dashboard/cardPayment";
import PaymentCSuccess from "./dashboard/cardPaymentSuccess";
import PaymentT from "./dashboard/transactionPayment";
import FAQ from "./pages/faq";
import CoachFinancial from "./dashboard/coachFinancial";
import Testimonies from "./pages/learnTestimonies";
import FincancialPage from "./pages/financialPage";
import CreatedSavings from "./dashboard/createdSavings";
import Guides from "./pages/guide";
import Updates from "./pages/updates";
import Careers from "./pages/careers";
import Calculator from "./pages/calculator";
import Press from "./pages/press";
import Logos from "./pages/logos";
import Images from "./pages/images";
import HalalPage from "./pages/halalPage";
import Hazy from "./pages/hazy";
import General from "./pages/general";
import LoginSAN from "./pages/loginSAN";
import CodeSAN from "./pages/codeSAN";
import RecoverSAN from "./pages/recoverSAN";
import LearnSave from "./pages/learnSave";
import Grit from "./dashboard/grit";
import GritSave from "./dashboard/gritSave";
import GritDuration from "./dashboard/gritDuration";
import GritSummary from "./dashboard/gritSummary";
import GritOverview from "./dashboard/gritOverview";
import GritAmount from "./dashboard/gritAmount";
import GritDashboard from "./dashboard/gritDashboard";
import GritHousing from "./dashboard/gritHousing";
import GritCompleted from "./dashboard/gritCompleted";
import GritWithdraw from "./dashboard/gritWithdraw";
import TestingP from "./pages/testingP";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/learn-save" element={<LearnSave/>}></Route>
      <Route path="/alerts" element={<Alerts />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/learn-more" element={<Learn />}></Route>
      <Route path="/security" element={<AnswerQuestion />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/save" element={<Save />}></Route>
      <Route path="/dilla-wallet" element={<DillaWallet />}></Route>
      <Route path="/about-us" element={<AboutUsPage />}></Route>
      <Route path="/download-ardilla" element={<DownloadApp />}></Route>
      <Route path="/ranks" element={<RankPage />}></Route>
      <Route path="/terms-conditions" element={<TermsCondition />}></Route>
      <Route path="/payment-accounts" element={<PaymentA />}></Route>
      <Route path="/grit" element={<Grit/>}></Route>
      <Route path="/grit/save" element={<GritSave/>}></Route>
      <Route path="/grit/save-duration" element={<GritDuration/>}></Route>
      <Route path="/grit/summary" element={<GritSummary/>}></Route>
      <Route path="/grit/overview" element={<GritOverview/>}></Route>
      <Route path="/grit/details" element={<GritAmount/>}></Route>
      <Route path="/grit/dashboard" element={<GritDashboard/>}></Route>
      <Route path="/grit/housing" element={<GritHousing/>}></Route>
      <Route path="/grit/completed" element={<GritCompleted/>}></Route>
      <Route path="/grit/withdraw" element={<GritWithdraw/>}></Route>
      <Route
        path="/payment-accounts-success"
        element={<PaymentASuccess />}
      ></Route>
      <Route path="/payment-card" element={<PaymentC />}></Route>
      <Route path="/payment-card-success" element={<PaymentCSuccess />}></Route>
      <Route path="/payment-transaction" element={<PaymentT />}></Route>
      <Route path="/faq" element={<FAQ />}></Route>
      <Route path="/financial-coach" element={<CoachFinancial />}></Route>
      <Route path="/testimonies" element={<Testimonies />}></Route>
      <Route path="/coach" element={<FincancialPage />}></Route>
      <Route path="/savings-created" element={<CreatedSavings />}></Route>
      <Route path="/guides" element={<Guides />}></Route>
      <Route path="/updates" element={<Updates />}></Route>
      <Route path="/careers" element={<Careers />}></Route>
      <Route path="/interest" element={<Calculator />}></Route>
      <Route path="/press" element={<Press />}></Route>
      <Route path="/press/logos" element={<Logos />}></Route>
      <Route path="/press/images" element={<Images />}></Route>
      <Route path="/halal" element={<HalalPage />}></Route>
      <Route path="/hazy" element={<Hazy />}></Route>
      <Route path="/general" element={<General />}></Route>
      <Route path="/login-san" element={<LoginSAN />}></Route>
      <Route path="/san-code" element={<CodeSAN />}></Route>
      <Route path="/login-san" element={<LoginSAN />}></Route>
      <Route path="/san-code" element={<CodeSAN />}></Route>
      <Route path="/recover-san" element={<RecoverSAN />}></Route>

      <Route
        path="/information-security"
        element={<InformationSecurity />}
      ></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>

      <Route
        path="/verify-mobile"
        element={
          // <GuestRoute>
          <VerifyMobile />
          // </GuestRoute>
        }
      ></Route>
      <Route
        path="/set-pin"
        element={
          // <GuestRoute>
          <Pin />
          // </GuestRoute>
        }
      ></Route>
      <Route path="/bvn-verify" element={<KycVerify />}></Route>
      <Route path="/testing" element={<TestingP/>}></Route>
      <Route
        path="/dashboard"
        element={
          // <ProtectRoute>
          <DashboardMain />
          // </ProtectRoute>
        }
      ></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/savings" element={<Savings />}></Route>
      <Route path="/create-flex" element={<CreateFlexPlan />}></Route>
      <Route path="/flex-spend" element={<FlexSpend />}></Route>
      <Route path="/flex-type" element={<FlexType />}></Route>
      <Route path="/target-type/:id" element={<TargetType />}></Route>
      <Route path="/target-dashboard/:id" element={<TargetDashboard />}></Route>
      <Route path="/flex-dashboard" element={<FlexDashboard />}></Route>
      <Route path="/flex-success" element={<FlexSuccess />}></Route>
      <Route path="/flex-set-amount" element={<FlexSetAmount />}></Route>
      <Route path="/flex-set-duration" element={<FlexSetDuration />}></Route>
      <Route path="/flex-overview" element={<FlexOverview />}></Route>
      <Route path="/flex-savings" element={<FlexSetSave />}></Route>
      <Route path="/target-save/:id" element={<TargetSave />}></Route>
      <Route path="/flex-plan" element={<FlexPlan />}></Route>
      <Route path="/target-plan" element={<TargetPlan />}></Route>
      <Route path="/create-target/:id" element={<CreateTargetPlan />}></Route>
      <Route path="/target-earn/:id" element={<TargetEarn />}></Route>
      <Route path="/target-spend/:id" element={<TargetSpend />}></Route>
      <Route path="/recover-password" element={<ForgotPassword />}></Route>
      <Route path="/set-password/:id" element={<SetPassword />}></Route>

      <Route path="/target-prefer/:id" element={<TargetPrefer />}></Route>
      <Route
        path="/target-public-selection/:id"
        element={<TargetPublicSelection />}
      ></Route>
      <Route path="/target-public-desc/:id" element={<TargetDesc />}></Route>
      <Route
        path="/target-share-link/:id"
        element={<TargetPlanShare />}
      ></Route>
      <Route
        path="/target-set-amount/:id"
        element={<TargetSetAmount />}
      ></Route>
      <Route path="/target-set-save/:id" element={<TargetSetSave />}></Route>
      <Route
        path="/target-set-duration/:id"
        element={<TargetSetDuration />}
      ></Route>
      <Route path="/target-custom-save" element={<TargetCustomSave />}></Route>
      <Route path="/flex/top-up" element={<FlexOverviewTopped />}></Route>
      <Route path="/flex-overview/san" element={<FlexOverviewSan />}></Route>
      <Route path="/flex-overview/card" element={<FlexOverviewCard />}></Route>
      <Route path="/target-overview/:id" element={<TargetOverview />}></Route>
      <Route
        path="/target-overview/san/:id"
        element={<TargetOverviewSan />}
      ></Route>
      <Route
        path="/target-overview/card/:id"
        element={<TargetOverviewCard />}
      ></Route>
      <Route path="/target-private" element={<TargetPlanPrivate />}></Route>
      <Route path="/target-private/explore" element={<Explore />}></Route>

      <Route path="/ot" element={<Ot />}></Route>

      <Route path="/dilla" element={<DillaMain />}></Route>
      <Route path="/learn" element={<LearnMain />}></Route>
      <Route path="/learn/article" element={<LearnBlog />}></Route>
      <Route path="/learn/quiz" element={<LearnQuizes />}></Route>
      <Route path="/learn/profile" element={<LearnProfiles />}></Route>
      <Route path="/article/read-article" element={<ReadBlog />}></Route>

      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/profile/security" element={<Security />}></Route>
      <Route path="/profile/get-help" element={<ProfileGetHelp />}></Route>
      <Route
        path="/profile/account"
        element={<ProfileAccountSettings />}
      ></Route>
      <Route path="/profile/referral" element={<ProfileRefer />}></Route>
      <Route path="/profile/kyc" element={<KYC />}></Route>
      <Route path="/kyc-review" element={<KYCReview />}></Route>
      <Route path="/kyc-failed" element={<KYCFailed />}></Route>
      <Route path="/kyc-completed" element={<KYCCompleted />}></Route>

      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/explore" element={<ExplorePage />}></Route>
      <Route path="/vault" element={<Vault />}></Route>
      <Route path="/create-vault" element={<CreateVault />}></Route>
      <Route path="/vault-earn" element={<EarnVault />}></Route>
      <Route path="/vault-spend" element={<SpendVault />}></Route>
      <Route path="/vault-type" element={<VaultType />}></Route>
      <Route path="/vault-dashboard" element={<DashboardVault />}></Route>
      <Route path="/vault-save" element={<VaultSetSave />}></Route>
      <Route path="/vault-overview" element={<VaultOverview />}></Route>
      <Route path="/vault-set-amount" element={<VaultPlanSet />}></Route>
      <Route path="/vault-set-save" element={<SetSaveVault />}></Route>
      <Route
        path="/vault-set-duration"
        element={<VaultPlanSetDuration />}
      ></Route>
      <Route path="/vault-custom-save" element={<CustomSaveVault />}></Route>
      <Route path="/custom-vault" element={<CustomVault />}></Route>
      <Route path="/flexplan-dashboard" element={<DashboardFlexPlan />}></Route>
      <Route path="/vaultplan-dashboard" element={<VaultDash />}></Route>
      <Route path="/savings-portfolio" element={<PortfolioSavings />}></Route>

      {/* <Route path="/dilla" element={<DillaMain />}></Route>
        <Route path="/learn" element={<LearnMain />}></Route>
        <Route path="/learn/article" element={<LearnBlog />}></Route> */}

      <Route
        path="/otp"
        element={
          // <GuestRoute>
          <Otp />
          // </GuestRoute>
        }
      ></Route>
      <Route
        path="/security-question"
        element={
          // <GuestRoute>
          <SecurityQuestion />
          // </GuestRoute>
        }
      ></Route>
      <Route
        path="/complete-profile"
        element={
          // <GuestRoute>
          <CompleteProfileDetails />
          // </GuestRoute>
        }
      ></Route>
      <Route path="/404" element={<ErrorPage />}></Route>
      <Route path="*" element={<Navigate to="/404" replace />}></Route>
    </Routes>
    {/* </ScrollToTop> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
