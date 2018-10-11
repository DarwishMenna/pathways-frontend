export type Id = string;

export interface PhoneNumber {
    readonly type: string;
    readonly phoneNumber: string;
}

export interface Address {
    // readonly id: string;
    readonly address: string;
    readonly city: string;
    readonly state_province: string;
    readonly postal_code: string;
    readonly country: string;
}

export interface AddressWithType {
    readonly type: string;
    readonly address: Address;
}

export interface Service {
    readonly id: Id;
    readonly name: string;
    readonly description: string;
    readonly phoneNumbers: ReadonlyArray<PhoneNumber>;
    readonly physicalAddress: Address;
    readonly postalAddress: Address;
}

export interface TaskServices {
    readonly loading: boolean;
    readonly serviceIds: ReadonlyArray<Id>;
    readonly message: string;
}

export interface ServiceMap {
    readonly [serviceId: string]: Service;
}

export interface TaskServicesMap {
    readonly [taskId: string]: TaskServices;
}

export interface ServiceStore {
    readonly serviceMap: ServiceMap;
    readonly taskServicesMap: TaskServicesMap;
}

export interface ValidatedPhoneNumberJSON {
    readonly phone_number_type: string;
    readonly phone_number: string;
}

export interface ValidatedAddressJSON {
    readonly address_type: string;
    readonly address: Address;
}

export interface ValidatedServiceJSON {
    readonly id: string;
    readonly name: string;
    readonly description: string;
}

export interface ValidatedLocationJSON {
    readonly phone_numbers: ReadonlyArray<ValidatedPhoneNumberJSON>;
    readonly addresses: ReadonlyArray<ValidatedAddressJSON>;
}

export interface ValidatedServiceAtLocationJSON {
    readonly service: ValidatedServiceJSON;
    readonly location: ValidatedLocationJSON;
}
