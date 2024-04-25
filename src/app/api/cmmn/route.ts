import {NextResponse} from 'next/server';
import {Provider} from "@/src/server/provider/provider";
import {CmmnService} from "@/src/server/service/cmmn.service";
import {CmmnCl} from "@/src/server/entity/cmmnCl.entity";


export const GET = async () => {
    const service = Provider.getService(CmmnService)
    const abc = new CmmnCl.Cond('COM', 'COM', '최상위 코드', '모든 코드의 최상위이다');
    const entity = await service.createCmmnCl(abc);

    return NextResponse.json({entity});
};
