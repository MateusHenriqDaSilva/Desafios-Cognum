import db from '../model/db'
import Employee from "../model/employee"

export const listEmployee = async () => {
    try {
        await db();
        const employee = await Employee.find();
        return employee;
    } catch (error) {
        throw error;
    }
}

export const createEmployee = async (employee) => {
    await db()
    const createdEmployee = await Employee.create(employee)
    return createdEmployee
}

export const updateEmployee = async (id, newBody) => {
    await db()
    await Employee.findByIdAndUpdate(id, newBody)
}

export const deleteEmployee = async (id) => {
    await db()
    await Employee.findByIdAndDelete(id)
}