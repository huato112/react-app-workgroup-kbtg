import { useEffect } from 'react'
import { useUserStore } from '../stores/user.store'

export function useUsers() {
  const {
    users,
    isLoading,
    error,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
    clearError,
  } = useUserStore()

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return {
    users,
    isLoading,
    error,
    createUser,
    updateUser,
    deleteUser,
    clearError,
    refetch: fetchUsers,
  }
}

export function useUser(id?: string) {
  const {
    selectedUser,
    isLoading,
    error,
    fetchUserById,
    updateUser,
    deleteUser,
    setSelectedUser,
    clearError,
  } = useUserStore()

  useEffect(() => {
    if (id) {
      fetchUserById(id)
    } else {
      setSelectedUser(null)
    }
  }, [id, fetchUserById, setSelectedUser])

  return {
    user: selectedUser,
    isLoading,
    error,
    updateUser,
    deleteUser,
    clearError,
  }
}
