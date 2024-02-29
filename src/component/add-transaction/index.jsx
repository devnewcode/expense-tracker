import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function TransactionForm({onClose,isOpen}){

    const {formData, setFormData, value, setValue, handleFormSubmit} = useContext(GlobalContext);

    function handleFormChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        handleFormSubmit(formData)
    }
    return <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add new transaction</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Enter Description</FormLabel>
                        <Input placeholder="Enter transaction description"
                        name="description"
                        type="text"
                        onChange={handleFormChange}
                        />

                    </FormControl>
                    <FormControl>
                        <FormLabel>Enter amount</FormLabel>
                        <Input placeholder="Enter transaction amount"
                        name="amount"
                        type="number"
                        onChange={handleFormChange}
                        />
                        
                    </FormControl>
                    <RadioGroup mt="5" value={value} onChange={setValue}>
                        <Radio onChange={handleFormChange} checked={formData.type === "income"} value="income" colorScheme="blue" name="type">Income</Radio>
                        <Radio onChange={handleFormChange} checked={formData.type === "expense"} value="expense" colorScheme="red" name="type">Expense</Radio>
                    </RadioGroup>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose} mr={"4"}>Cancel</Button>
                    <Button onClick={onClose} type="submit">Add</Button>
                </ModalFooter>
            </ModalContent>
        </form>
    </Modal>
}