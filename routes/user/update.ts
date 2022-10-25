import User from '../../models/service.ts/user';
class Update {
    async user(userId: string) {
        try {
            const user = await User.update(userId);
            return {
                success: true,
                response: user,
                message: 'User updated'
            }
            
        } catch (error) {
            return {
                success: false,
                response: null,
                message: 'Unable to update user'
            }
            
        }
    }
}


export default new Update();