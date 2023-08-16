import { ICall } from './Call';
import { IService } from './Service';

// export interface IListItems {
// 	call: ICall;
// 	service: IService;
// }

export interface IListItems {
	name: string;
	id: number;
	services: [
		{
			name: string;
			price: string;
			callId: string;
			id: number;
		}
	];
}
