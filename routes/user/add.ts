import User from '../../models/service.ts/user';
class Add {
    async user(body: any) {
        try {
            const user = await User.save(body);
            return {
                success: true,
                response: user,
                message: 'User created'
            }
            
        } catch (error) {
            return {
                success: false,
                response: null,
                message: 'Unable to create user'
            }
            
        }
    }
}


export default new Add();