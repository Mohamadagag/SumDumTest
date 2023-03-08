import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TermsAccordion from "../../components/TermsAccordion/TermsAccordion";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <div className="accodion-list">
          <TermsAccordion
            title={"Delivery & Collection"}
            desc1={
              "Within Dubai, pickup and drop-off are free of charge. However, for other Emirates, customers should consult with counter staff regarding applicable charges."
            }
          />
          <TermsAccordion
            title={"Security"}
            desc1={
              "Customers must pay a security deposit of AED 1500 for economy cars and AED 5000 for luxury cars, which will be retained for 30 days. In addition, customers must provide a copy of their passport with a visa page and entry stamp or Emirates ID copy, as well as a valid driving license copy."
            }
          />
          <TermsAccordion
            title={"Insurance"}
            desc1={
              "All vehicles are insured in the UAE. If the vehicle is damaged or in an accident, customers must pay a minimum insurance excess claim charge of AED 2000. A police report is mandatory in such cases. If there is no police report, the customer will be responsible for the full cost of repairs."
            }
          />
          <TermsAccordion
            title={"Driving licenses"}
            desc1={
              "Customers must have a valid international driving license from the country on whose passport they are traveling. For UAE residents, a valid UAE driver's license is required."
            }
          />

          <TermsAccordion
            title={"Credit Cards"}
            desc1={"Visa or MasterCard credit cards are accepted."}
          />
          <TermsAccordion
            title={"Age Restrictions"}
            desc1={
              " Drivers must be at least 23 years old and have held a valid driving license for more than 6 months."
            }
          />
          <TermsAccordion
            title={"Theft Protection"}
            desc1={"Theft protection insurance cover is not included."}
          />
          <TermsAccordion
            title={"Toll Tax"}
            desc1={"A toll tax of AED 5 per crossing will be charged."}
          />

          <TermsAccordion
            title={"Parking Fee"}
            desc1={
              "Customers must pay parking fees directly at parking meters."
            }
          />

          <TermsAccordion
            title={"Fines"}
            desc1={
              "Customers will be responsible for any fines incurred while the vehicle is in their possession."
            }
          />

          <TermsAccordion
            title={"Vehicle Prohibition"}
            desc1={
              "Racing, towing, off-road driving, and any other activities prohibited by UAE law are not allowed."
            }
          />

          <TermsAccordion
            title={"Vehicle Impound"}
            desc1={
              "If the government impounds the vehicle for any reason, the customer will be charged a loss of rent."
            }
          />

          <TermsAccordion
            title={"Mileage Restriction"}
            desc1={
              "Customers are allowed to drive up to 250 km per day or 5000 km per month. Any additional kilometers will be charged at AED 0.50 per km or AED 15 per km for luxury cars."
            }
          />

          <TermsAccordion
            title={"Non-Coverage"}
            desc1={"Loss or damage to personal belongings is not covered."}
          />

          <TermsAccordion
            title={"Driving Restrictions"}
            desc1={
              "Driving under the influence of alcohol or drugs is strictly prohibited. Emergency road services are available, and customers should inquire at the counter."
            }
          />

          <TermsAccordion
            title={"Petrol"}
            desc1={
              "Customers must return the vehicle with the same fuel level as when it was rented. Otherwise, they will be charged for the difference."
            }
          />

          <TermsAccordion
            title={"Rental Period"}
            desc1={"The rental period is a minimum of 24 hours."}
          />

          <TermsAccordion
            title={"Additional Driver"}
            desc1={
              "A fee of AED 200 will be charged for each additional driver."
            }
          />

          <TermsAccordion
            title={"Cancellation"}
            desc1={
              "If customers cancel the rental before the rental period, the full amount will be charged."
            }
          />

          <TermsAccordion
            title={"Other Conditions"}
            desc1={
              "Customers acknowledge that the vehicle was delivered to them in good condition and fit for the purpose of use. Customers should return the vehicle without any alterations."
            }
          />

          <TermsAccordion
            title={"Working Hours"}
            desc1={
              "The rental company's working hours are from 9 am to 6 pm, except on Fridays."
            }
          />

          <TermsAccordion
            title={"Smoking"}
            desc1={
              "Smoking inside the car is prohibited, and customers will be charged AED 1000 for smoking inside the vehicle."
            }
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
