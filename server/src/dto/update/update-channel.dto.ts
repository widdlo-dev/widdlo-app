import {IsMongoId, IsNotEmpty, IsOptional} from "class-validator";
import {CreateChannelDto} from "../create/create-channel.dto";
import {PickType} from "@nestjs/swagger";

export class UpdateChannelDto extends PickType(CreateChannelDto, ['name']) {
    @IsNotEmpty()
    @IsMongoId({message: "invalid id"})
    id: string;

    @IsOptional()
    name: string;
}