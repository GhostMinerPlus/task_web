import { Contants } from './util/constant';
import { Error } from './err';

export class ScriptTree {
    script: string = '';
    name: string = '';
    next_v: ScriptTree[] = [];
}

export class EdgeHelper {
    async execute(st: ScriptTree): Promise<any> {
        try {
            const res = await fetch(Contants.API_EDGE_EXECUTE1, {
                method: 'POST',
                body: JSON.stringify(st)
            });
            const rs = await res.text();
            if (res.status >= 300) {
                console.warn('when EdgeHelper.execute:\n', res.status);
                throw new Error(rs);
            }
            return JSON.parse(rs);
        } catch (e) {
            console.warn('when EdgeHelper.execute:\n', e);
            throw new Error('failed to fetch');
        }
    }
}
