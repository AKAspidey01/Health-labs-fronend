import React from 'react';
import './Dashboard.scss';
import Select from 'react-select';
import TimeIcon from '../../assets/images/dashboard-images/time-icon.svg';
import RupeeIcon from '../../assets/images/dashboard-images/rupee-icon.svg';
import { BarChart } from '@mui/x-charts/BarChart';


const Dashboard = () => {

  const options = [
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'lastweek', label: 'Lastweek' }
  ]

  const pedingTests = [
    {
      key: 'Print',
      value: '30',
    },
    {
      key: 'Retesting',
      value: '3664',
    },
    {
      key: 'Sample',
      value: '900',
    },
    {
      key: 'Authorization',
      value: '20',
    },
    {
      key: 'Rejected',
      value: '56',
    },
    {
      key: 'Reg Count',
      value: '16',
    },
    {
      key: 'Amount',
      value: '₹ 3150',
    },
    {
      key: 'Discount',
      value: '₹ 350',
    },
    {
      key: 'Pending',
      value: '₹ 9900',
    },
    {
      key: 'Drawer',
      value: '₹ 3500',
    },
  ]

  return (
    <div className="Dashboard">
      <div className="inner-view-section">
        <div className="top-branch-code-filter-sec flex items-center justify-between ">
          <div className="left-branch-id flex items-center gap-x-4">
            <h4 className='text-grayText text-lg font-manrope font-semibold'>Branch: <span className='text-Black'>DDC</span></h4>
            <p className='font-plusjakarta font-medium text-grayText bg-white px-3 py-1 rounded-lg'>ID: <span className='text-[#0099FF]'>10</span></p>
          </div>
          <div className="right-selection-filter">
            <Select 
              options={options}
              defaultInputValue='Today'
              className=''
            />
          </div>
        </div>
        <div className="main-dashboard-kpis grid grid-cols-12 gap-6 mt-6">
          <div className="smiliar-kpi-card flex flex-col gap-y-6 first-kpi-card rounded-xl bg-white px-6 py-5 col-span-2">
            <div className="top-heading-kpi">
              <p className='text-Black font-manrope font-semibold mb-[5px] opacity-70'>Due Amount</p>
              <h4 className='text-blueText font-plusjakarta font-semibold text-3xl'>₹ 18290</h4>
            </div>
            <div className="bottom-value-kpi-sec">
              <p className='text-sm font-manrope opacity-50 text-Black'>Contact Number</p>
              <a href="tel:+919032202017" className='text-Blue font-plusjakarta font-semibold'>9032202017</a>
            </div>
          </div>
          <div className="smiliar-kpi-card flex flex-col gap-y-6 first-kpi-card rounded-xl bg-white px-6 py-5 col-span-5">
            <div className="top-heading-kpi flex justify-between">
              <div className="left-head-sec">
                <p className='text-Black font-manrope font-semibold mb-[5px] opacity-70'>Tests Pending</p>
                <h4 className='text-blueText font-plusjakarta font-semibold text-3xl'>48890</h4>
              </div>
              <div className="right-icon-kpi">
                <img src={TimeIcon} className='w-12 h-12' alt="" />
              </div>
            </div>
            <div className="bottom-value-kpi-sec flex gap-x-4 justify-between">
              {pedingTests.slice(0 , 5).map((items , index) => {
                return (
                  <div className="single-bottom-values-kpi" key={index}>
                    <p className='text-sm font-manrope opacity-60 text-Black'>{items.key}</p>
                    <p className={`${items.key == 'Rejected' ? 'text-red-400' : 'text-blueText'} font-plusjakarta font-semibold`}>{items.value}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="smiliar-kpi-card flex flex-col gap-y-6 first-kpi-card rounded-xl bg-white px-6 py-5 col-span-5">
            <div className="top-heading-kpi flex justify-between">
              <div className="left-head-sec">
                <p className='text-Black font-manrope font-semibold mb-[5px] opacity-70'>Total Collection</p>
                <div className="flex items-end gap-4 ">
                  <h4 className='text-blueText font-plusjakarta font-semibold text-3xl'>₹ 13400</h4>
                  <p className='text-sm font-plusjakarta mb-1'>Net: <span className='text-[#00B87B]'>₹ 13400</span></p>
                </div>
              </div>
              <div className="right-icon-kpi">
                <img src={RupeeIcon} className='w-12 h-12' alt="" />
              </div>
            </div>
            <div className="bottom-value-kpi-sec flex gap-x-4 justify-between">
              {pedingTests.slice(5 , 10).map((items , index) => {
                return (
                  <div className="single-bottom-values-kpi" key={index}>
                    <p className='text-sm font-manrope opacity-60 text-Black'>{items.key}</p>
                    <p className={`${items.key == 'Rejected' ? 'text-red-400' : 'text-blueText'} font-plusjakarta font-semibold`}>{items.value}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="smiliar-kpi-card flex flex-col gap-y-6 first-kpi-card rounded-xl bg-white px-6 py-5 col-span-5">
            <div className="top-heading-kpi">
                <p className='text-Black font-manrope font-semibold mb-[5px] opacity-70'>Total Collection</p>
            </div>
            <div className="bottom-value-kpi-sec">
              <BarChart
                xAxis={[
                  {
                    id: 'categories',
                    data: ['Jan', 'Feb', 'Mar'],
                    scaleType: 'band',
                  },
                ]}
                series={[
                  {
                    data: [14, 17, 13],
                    label: 'Received',
                    color: '#0095FF',
                  },
                  {
                    data: [12, 12, 24],
                    label: 'Tested',
                    color: '#00E096',
                  },
                  {
                    data: [6, 17, 12],
                    label: 'Authorized',
                    color: '#FF5252',
                  },
                ]}
                height={300}
                margin={{ top: 30, right: 30, bottom: 30, left: 40 }}
                legend={{ hidden: false }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
