import User from '../../models/service.ts/user';
class Get {
    async list(page, limit) {
        try {
            const users = await User.list(page, limit);
            const count = await User.count() || 0;

            return {
                success: true,
                response: {
                    users,
                    totalPages: Math.ceil(count / limit),
                    currentPage: page,
                },
                message: 'User list fetched'
            }
            
        } catch (error) {
            return {
                success: false,
                response: null,
                message: 'Unable to fetch users'
            }
            
        }
    }

    async get(id) {
        try {
            const user = await User.get(id);

            return {
                success: true,
                response: user,
                message: 'User fetched'
            }
            
        } catch (error) {
            return {
                success: false,
                response: null,
                message: 'Unable to fetch user'
            }
            
        }
    }
}


export default new Get();