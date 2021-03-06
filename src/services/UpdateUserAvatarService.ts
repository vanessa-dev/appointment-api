import {getRepository} from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig  from '../config/upload';
import AppError from '../errors/AppError';
import User from '../models/User';

interface Request{
    user_id: string;
    avatarFilename:string;
}

class UppdateUserAvatarService{
    public async execute({user_id,avatarFilename}: Request  ): Promise<User> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne(user_id);
        if(!user){
            throw new AppError('only Authenticated users can change avatar', 401);
        }
        
        if(user.avatar){
          //Deletar avatar anterior
          const userAvatarFilePath =  path.join(uploadConfig.directory,user.avatar);
          const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

          if(userAvatarFileExists){
            await fs.promises.unlink(userAvatarFilePath);
          }
        }

        user.avatar = avatarFilename;

        await userRepository.save(user);

        return user;
    }
}
export default UppdateUserAvatarService;