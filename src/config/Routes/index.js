import AdminHome from '../../modules/Admin/AdminHome';
import LoginAdmin from '../../modules/Admin/Auth/Login';
import AddMateri from '../../modules/Teacher/AddMateri';
import Course from '../../modules/Teacher/Course';
import DetailValue from '../../modules/Teacher/DetailValue';
import HomeTeacher from '../../modules/Teacher/HomeTeacher';
const routes = [
    {
        path:"/",
        label: "Admin HomePage",
        component:AdminHome
    },
    {
        path: "/login",
        label: "Login Page",
        component:LoginAdmin
    },
    {
        path: "/hometeacher",
        label: "Home Teacher Page",
        component:HomeTeacher
    },
    {
        path: "/detailnilai",
        label: "Detail Niali",
        component: DetailValue
    },
    {
        path: "/materipelajaran",
        label: "Materi Pelajaran",
        component: Course
    },
    {
        path: "/addmateri",
        label: "Add Materi Pelajaran",
        component: AddMateri
    }
  
]

export default routes;