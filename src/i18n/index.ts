import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      common: {
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        cancel: 'Cancel',
        save: 'Save',
        delete: 'Delete',
        edit: 'Edit',
        create: 'Create',
        search: 'Search',
        refresh: 'Refresh',
        close: 'Close',
      },
      navigation: {
        home: 'Home',
        users: 'Users',
      },
      users: {
        title: 'Users',
        description: 'Manage your team members and their permissions',
        addUser: 'Add User',
        createUser: 'Create New User',
        editUser: 'Edit User',
        deleteUser: 'Delete User',
        searchPlaceholder: 'Search users...',
        noUsersFound: 'No users found',
        noUsersDescription: 'Get started by creating a new user.',
        searchNoResults: 'Try adjusting your search terms.',
        createSuccess: 'User created successfully',
        updateSuccess: 'User updated successfully',
        deleteSuccess: 'User deleted successfully',
        deleteConfirm: 'Are you sure you want to delete this user?',
        fields: {
          name: 'Name',
          email: 'Email',
          role: 'Role',
          active: 'Active user',
          avatar: 'Avatar',
        },
        roles: {
          admin: 'Admin',
          user: 'User',
          moderator: 'Moderator',
        },
        status: {
          active: 'Active',
          inactive: 'Inactive',
        },
      },
      errors: {
        somethingWentWrong: 'Something went wrong',
        unexpectedError: 'An unexpected error occurred. Please try refreshing the page.',
        tryAgain: 'Try Again',
        reloadPage: 'Reload Page',
        fetchUsers: 'Failed to fetch users',
        createUser: 'Failed to create user',
        updateUser: 'Failed to update user',
        deleteUser: 'Failed to delete user',
        searchUsers: 'Failed to search users',
        userNotFound: 'User not found',
      },
    },
  },
  th: {
    translation: {
      common: {
        loading: 'กำลังโหลด...',
        error: 'ข้อผิดพลาด',
        success: 'สำเร็จ',
        cancel: 'ยกเลิก',
        save: 'บันทึก',
        delete: 'ลบ',
        edit: 'แก้ไข',
        create: 'สร้าง',
        search: 'ค้นหา',
        refresh: 'รีเฟรช',
        close: 'ปิด',
      },
      navigation: {
        home: 'หน้าแรก',
        users: 'ผู้ใช้',
      },
      users: {
        title: 'ผู้ใช้',
        description: 'จัดการสมาชิกในทีมและสิทธิ์การเข้าถึง',
        addUser: 'เพิ่มผู้ใช้',
        createUser: 'สร้างผู้ใช้ใหม่',
        editUser: 'แก้ไขผู้ใช้',
        deleteUser: 'ลบผู้ใช้',
        searchPlaceholder: 'ค้นหาผู้ใช้...',
        noUsersFound: 'ไม่พบผู้ใช้',
        noUsersDescription: 'เริ่มต้นด้วยการสร้างผู้ใช้ใหม่',
        searchNoResults: 'ลองปรับเงื่อนไขการค้นหา',
        createSuccess: 'สร้างผู้ใช้เรียบร้อยแล้ว',
        updateSuccess: 'อัปเดตผู้ใช้เรียบร้อยแล้ว',
        deleteSuccess: 'ลบผู้ใช้เรียบร้อยแล้ว',
        deleteConfirm: 'คุณแน่ใจหรือไม่ที่จะลบผู้ใช้นี้?',
        fields: {
          name: 'ชื่อ',
          email: 'อีเมล',
          role: 'บทบาท',
          active: 'ผู้ใช้ที่ใช้งานอยู่',
          avatar: 'รูปโปรไฟล์',
        },
        roles: {
          admin: 'ผู้ดูแลระบบ',
          user: 'ผู้ใช้',
          moderator: 'ผู้ดูแล',
        },
        status: {
          active: 'ใช้งานอยู่',
          inactive: 'ไม่ใช้งาน',
        },
      },
      errors: {
        somethingWentWrong: 'เกิดข้อผิดพลาดบางอย่าง',
        unexpectedError: 'เกิดข้อผิดพลาดที่ไม่คาดคิด กรุณาลองรีเฟรชหน้า',
        tryAgain: 'ลองอีกครั้ง',
        reloadPage: 'โหลดหน้าใหม่',
        fetchUsers: 'ไม่สามารถดึงข้อมูลผู้ใช้ได้',
        createUser: 'ไม่สามารถสร้างผู้ใช้ได้',
        updateUser: 'ไม่สามารถอัปเดตผู้ใช้ได้',
        deleteUser: 'ไม่สามารถลบผู้ใช้ได้',
        searchUsers: 'ไม่สามารถค้นหาผู้ใช้ได้',
        userNotFound: 'ไม่พบผู้ใช้',
      },
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  })

export default i18n