import Layout from '@/components/layout';
import React, { Fragment, useCallback, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Input from '@/components/input';
import Success from '../../assets/success.svg';
import { graphql } from 'gatsby';
import classNames from 'classnames';
import Arrow from '../../assets/arrow-left.svg';
import Cancel from '../../assets/cancel.svg';
import Slash from '../../assets/slash.svg';
import Check from '../../assets/check.svg';
import CheckTwo from '../../assets/check-two.svg';
import Container from '@/components/container';
import { StaticImage } from 'gatsby-plugin-image';

export default function Packages(props) {
  const [isOpen, setIsOpen] = useState<{ i: number; amount: number } | null>(
    null,
  );

  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [religion, setReligion] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [marital_status, setMaritalStatus] = useState('');
  const [phone, setPhone] = useState('');

  const [isOpen2, setIsOpen2] = useState(false);

  const closeSuccessModal = useCallback(() => {
    setIsOpen2(false);
  }, []);

  const closeModal = useCallback(() => setIsOpen(null), []);

  const handleSubmit = async (plan_id) => {
    console.log(
      name,
      email,
      religion,
      marital_status,
      address,
      phone,
      gender,
      dob,
      nationality,
      plan_id,
    );
    const res = await fetch(
      `${process.env.GATSBY_SANTIS_API_URL}/api/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          religion: religion,
          marital_status: marital_status,
          address: address,
          phone: phone,
          gender: gender,
          dob: dob,
          nationality: nationality,
          plan_id: `${plan_id}`,
        }),
      },
    );
    const data = await res.json();

    if (data.status === 'success') {
      closeModal();
      setTimeout(() => setIsOpen2(true), 1000);
      console.log(`response from API:`, data);
    } else {
      console.log('error');
    }
  };

  return (
    <Layout>
      <div className="">
        <div className="h-28 bg-santis-purple"></div>
        <div className="bg-[#0A1829]">
          <Container>
            <div className="flex p-6 flex-col-reverse sm:flex-row text-white justify-between items-center">
              <div className=" w-[100%] sm:w-[60%]  h-full flex flex-col justify-between">
                <h3 className=" text-[36px] pb-6">Packages</h3>
                <p className="pb-6 font-normal">
                  We recognize that navigating the health care system inside and
                  indeed outside Nigeria can be confusing and intimidating. We
                  walk and work with you to quickly and conveniently place you
                  before the appropriate top physicians inside and outside
                  Nigeria.
                </p>
                <p>
                  Access to quality medical care, 24/7 Medical assistance,
                  Private health advisorys, Appointment bookings with top notch
                  physicians, Telemedicine consults, Travel and medical
                  chaperone services, Medical companion services.
                </p>
              </div>
              <div className=" hidden sm:block w-[38%]">
                <StaticImage
                  src="../../assets/cards-two.png"
                  alt=""
                  // className="w-full h-[306px] md:h-[408px]"
                />
              </div>
            </div>
          </Container>
        </div>
        <h1 className="container p-6 mx-auto text-[36px] text-[#5A0F39]">
          SANTIS PLANS
        </h1>
        <ul className="container grid gap-6 px-6 pb-16 mx-auto md:grid-cols-2 lg:grid-cols-4">
          {props.data.allPackagesJson.nodes.map(
            ({ id, benefits, price, name, currency }, i) => (
              <EachPackage
                i={i}
                key={id}
                name={name}
                currency={currency}
                benefits={benefits}
                price={price}
                openModal={setIsOpen}
              />
            ),
          )}
        </ul>
      </div>
      <Transition appear show={!!isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0  bg-[#101828] opacity-70" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl bg-opacity-100 bg-[#fff] rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Registration Form -{' '}
                  {isOpen && props.data.allPackagesJson.nodes[isOpen.i].name}
                  {/* {console.log(props.data.allPackagesJson.nodes[isOpen.i])} */}
                  <div></div>
                </Dialog.Title>
                <hr className="my-4" />
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(
                      isOpen && props.data.allPackagesJson.nodes[isOpen.i].name,
                    );
                  }}
                  className="grid gap-6 mt-2 "
                >
                  <Input
                    required
                    type="text"
                    label="Full Name"
                    placeholder="Enter Your Full Name"
                    id="fullNamePackage"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="flex justify-between">
                    <Input
                      required
                      type="date"
                      label="Date Of Birth"
                      id="dobPackage"
                      className="w-[48%]"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                    <Input
                      required
                      type="select"
                      label="Gender"
                      placeholder="Select your gender"
                      id="genderPackage"
                      className="w-[48%]"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="" disabled>
                        Choose your gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Input>
                  </div>
                  <Input
                    required
                    type="text"
                    label="Nationality"
                    placeholder="Select Nationality"
                    id="nationalityPackage"
                    // className="w-[48%]"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  />
                  <div className="flex justify-between">
                    <Input
                      required
                      type="select"
                      label="Religion"
                      placeholder="Enter religion"
                      id="religionPackage"
                      className="w-[48%]"
                      value={religion}
                      onChange={(e) => setReligion(e.target.value)}
                    >
                      <option value="" disabled>
                        Choose your religion
                      </option>
                      <option value="Christianity">Christianity</option>
                      <option value="Islam">Islam</option>
                    </Input>
                    <Input
                      required
                      type="select"
                      label="Marital Status"
                      placeholder="Select Marital Status"
                      id="maritalStatusPackage"
                      className="w-[48%]"
                      value={marital_status}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                    >
                      <option value="" disabled>
                        Choose your Marital Status
                      </option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                    </Input>
                  </div>
                  <Input
                    required
                    type="text"
                    label="Home Address"
                    placeholder="Enter your Home Address"
                    id="homeAddressPackage"
                    className="col-span-full"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <div className="flex justify-between">
                    <Input
                      required
                      type="tel"
                      label="Phone Number"
                      placeholder="Enter your Phone Number"
                      id="ehoneNumberPackage"
                      className="w-[48%]"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <Input
                      required
                      type="email"
                      label="Email Address"
                      placeholder="Enter your Email Address"
                      id="emailAddressPackage"
                      className="w-[48%]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="py-3 text-white col-span-full bg-santis-purple"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpen2} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto "
          onClose={closeSuccessModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0  bg-[#101828] opacity-70" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="font-medium leading-6 text-center text-santis-purple"
                >
                  <Success className="max-w-[84px] mx-auto text-santis-gold mb-4" />
                  <span className="text-[30px] text-[#0A1829] font-medium">
                    Success
                  </span>
                </Dialog.Title>
                <div className="my-4 flex justify-center text-center">
                  <p className="text-sm  w-[75%] text-gray-500 ">
                    Your application has been successfully submitted. Click
                    below to continue.
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <button
                    type="button"
                    className="inline-flex justify-center py-2 text-sm font-medium text-[#fff] bg-santis-purple border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 w-[75%] focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeSuccessModal}
                  >
                    Continue
                  </button>
                </div>

                <div className="flex my-4 justify-center items-center">
                  <Arrow />
                  <p className="ml-2 text-gray-500">Back to Homepage</p>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Layout>
  );
}

function EachPackage({ name, benefits, price, currency, i, openModal }) {
  const [amount, setAmount] = useState(1);
  const benefitsList = Object.keys(benefits);
  const colors = ['#0A1829', '#5A0F39', '#CC8434', '#0A1829'];
  const bgColors = ['#0A18290D', '#5A0F390D', '#CC84340D', '#0A18290D'];
  // console.log(benefits);

  return (
    <li className=" bg-white shadow --tw-shadow:0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05); rounded-lg">
      <div
        style={{ color: colors[i], backgroundColor: bgColors[i] }}
        key={i}
        className="text-center p-4"
      >
        <h4 className="font-bold text-[24px]">{name} PLAN</h4>
        <div className="pt-2 pb-2 font-baskerville font-medium">
          <h3 className="text-[12px] normal-case">
            KILIMANJARO
            <span className="normal-case"> (Minimum of 4)</span>
          </h3>
          <h5 className="text-[8px]">10% DISCOUNT ON GROUP TOTAL</h5>
        </div>
        <div>
          <h3 className="text-[12px]">BEAVER (FEE FOR SERVICE)</h3>
          <h5 className="text-[8px] ">20% OF THE TOTAL CARE</h5>
        </div>
      </div>

      <ul className="p-4">
        <button
          className="block w-full py-2 text-center text-white bg-santis-purple"
          onClick={() => {
            openModal({ i, amount });
          }}
        >
          <span>Get Started </span>
        </button>
        {benefitsList.map((benefit) => {
          return (
            <li>
              <h5 className="my-2 text-[12px] font-bold  mt-6">
                {benefit.replace(/_+/g, ' ')}
              </h5>
              <ul>
                {Object.keys(benefits[benefit]).map((item) => {
                  return (
                    <li
                      className={classNames(
                        ' mb-2 rounded font-baskerville text-[#667085] flex',
                      )}
                    >
                      {benefits[benefit][item] === '1' ? (
                        <Check className="" />
                      ) : benefits[benefit][item] === '-1' ? (
                        <Cancel className="" />
                      ) : benefits[benefit][item] === '0' ? (
                        <Slash className="" />
                      ) : (
                        <CheckTwo />
                      )}
                      <div className="relative inline text-[12px] ml-1 after:w-full after:-bottom-1 after:absolute after:block">
                        {item.replace(/_+/g, ' ')}

                        {benefits[benefit][item] === '1' ? (
                          ''
                        ) : benefits[benefit][item] === '-1' ? (
                          ''
                        ) : benefits[benefit][item] === '0' ? (
                          ''
                        ) : (
                          <p className="text-[#12B76A] text-[12px]">
                            {benefits[benefit][item]}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export const query = graphql`
  query MyQuery {
    allPackagesJson {
      nodes {
        id
        name
        benefits {
          Features {
            Dedicated_client_Coordinator_Manager
          }
          Vaccination__covered_in_country_only_ {
            diamond_vaccination_bundles
            ruby_vaccination_bundles
          }
          Additional_benefits__annually_ {
            Cancer_Screening___Cancer_markers_check_
            Cardiac_Health
            GI_tract
            Liver_Health
            Pancreas_Health
            Renal_Health
            Respiratory_Health
          }
          Additional_investigation {
            Colonoscopy
            Esophagogastroduodenoscopy
            Gastroscopy
            Mammogram
            Pillcam_Endoscopy
          }
          Additional_services {
            Antenatal_Care__Conditional_
            Corporate_Health_Talks__Where_necessary_
            Dispatch_Services_for_prescribed_medications_per_delivery_
            Emergency_Visit__any_location_
            Geriatric_Care
            Home_Deliveries__Conditional_
            Hospice_Care_per_month
            Home_Visit__where_necessary_
            International_evacuation
            Local_evacuation
            National_evacuation
            Occupational_Health
            Physiotherapy_per_session
            Travel_Medicine_per_consult
          }
        }
        price
        currency
      }
    }
  }
`;