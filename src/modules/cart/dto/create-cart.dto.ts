import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { Song } from 'src/modules/songs/entities/song.entity';
import { User } from 'src/modules/users/entities/user.entity';

export class CreateCartDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  active: boolean;

  @ApiProperty({ example: [{ id: "1" }, { id: "2"}] }) 
  readonly songs: Song[]; 
  
  @ApiProperty({ example: { id: "1" } }) 
  readonly user: User; 

}
