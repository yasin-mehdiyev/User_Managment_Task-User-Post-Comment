import React, { Fragment, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "../../redux/features/user/userAction";
import { selectUsers } from "../../redux/features/user/userSlice";
import Carts from "../../components/Cart/Carts";
import Loader from "../../components/Skeleton/Loader";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    try {
      setLoading(true);
      dispatch(fetchUsersData());
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <section className="mt-4">
          <div className="container">
            <div className="row">
              {users?.length ? <Carts users={users} /> : null}
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Dashboard;