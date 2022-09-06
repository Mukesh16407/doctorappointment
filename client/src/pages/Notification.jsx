import { Tabs } from 'antd'
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout'
import { hideLoading, showLoading } from '../redux/alertSlice';
import { setUser } from '../redux/userSlice';

export const Notification = () => {

    const {user} = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const markAllAsSeen=async()=>{
        try{
            dispatch(showLoading());
            const response = await axios.post("/api/user/mark-all-notifications-as-seen", {userId : user._id} , {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.message)
                dispatch(setUser(response.data.data));
              } else {
                toast.error(response.data.message);
              }
        }catch(error){
            dispatch(hideLoading());
            toast.error("Something went wrong");
        }
    }
  return (
    <Layout>
        <h1 className='page-title'>Notifications</h1>
        <Tabs>
        <Tabs.TabPane tab="Unseen" key={0}>
          <div className="d-flex justify-content-end">
            <h1 className="anchor" onClick={()=>markAllAsSeen()}>Mark all as seen</h1>
          </div>
          {user?.unseenNotifications.map((notification,i)=>(
            <div className='card p-2 mt-2'onClick={()=>navigate(notification.onClickPath)} key={i}>
                <div className="card-text">{notification.message}</div>
            </div>
          ) )}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Seen" key={1}>
          <div className="d-flex justify-content-end">
            <h1 className="anchor" >Delete All</h1>
          </div>
        </Tabs.TabPane>
        </Tabs>
    </Layout>
  )
}
