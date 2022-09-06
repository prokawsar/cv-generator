import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_KEY } from '$env/static/public';

const supabaseUrl = 'https://lxdsjebbaxliighjcbxn.supabase.co';
const supabaseKey = PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export class Subabase {
	_model: any;
	constructor(model: any) {
		this._model = model;
	}

	async getAll() {
		let { data: users, error } = await supabase.from(this._model).select('*');
		return { users, error };
	}

	async save(value: { name: string; email: string }, columns?: Array<string>) {
		const { data, error } = await supabase
			.from(this._model)
			.insert([{ name: value.name, email: value.email }], { returning: 'minimal' });

		return { data, error };
	}
}
