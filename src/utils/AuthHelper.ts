import bcrypt from 'bcrypt'

export const hashPassword = async (data: string) => {
    return await bcrypt.hash(data, 10)
}

