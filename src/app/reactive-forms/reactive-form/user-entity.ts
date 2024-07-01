export interface UserEntity {
	id?: number;
	firstName?: string;
	lastName?: string;
	email?: string;
	mobileNumber?: string;
	dob?: Date;
	age?: string;
	deptId?:DepartmentEntity;
	roleId?:RoleEntity
	address?:UserAddressEntity[];
}
interface DepartmentEntity {
	id:number;
	name:string;
}

interface UserAddressEntity {
	id:number;
	address:string;
	pincode:string;
	street:string;
}
interface RoleEntity{
	id:number;
	name:string;
}