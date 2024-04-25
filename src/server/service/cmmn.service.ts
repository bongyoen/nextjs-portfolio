import {InjectRepository, Service} from "@/src/server/provider/provider";
import {CmmnCl} from "@/src/server/entity/cmmnCl.entity";
import {Repository} from "typeorm";

@Service
export class CmmnService {
    @InjectRepository(CmmnCl) cmmnClRepo: Repository<CmmnCl>;

    async createCmmnCl(content: InstanceType<typeof CmmnCl.Cond>) {
        const newCmmnCl = new CmmnCl();

        newCmmnCl.cmmnClCode = content.cmmnClCode;
        newCmmnCl.upperClCode = content.cmmnClCode
        newCmmnCl.cmmnClName = content.cmmnClName;
        newCmmnCl.cmmnClDesct = content.cmmnClDesct;

        return this.cmmnClRepo.save(newCmmnCl);
    }

}