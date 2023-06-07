import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsUUID } from 'class-validator';
import { Song } from 'src/modules/songs/entities/song.entity';
import { User } from 'src/modules/users/entities/user.entity';

export class UpdateCartDto {
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiProperty({ example: [{ id: 1 }, { id: 2 }] })
  songs: Song[];

  @ApiProperty({ example: { id: "1" } })
  user: User;
}