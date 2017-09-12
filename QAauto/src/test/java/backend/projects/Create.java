package backend.projects;


import com.jayway.restassured.RestAssured;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import static com.jayway.restassured.RestAssured.given;
import static org.testng.Assert.assertTrue;
public class Create {

    @BeforeTest(groups = "backend")
    public void login() {
        RestAssured.baseURI = "https://dev-interviewer.herokuapp.com/";


    }

    @Test(groups = {"functional", "backend"})
    public void subTaskCRUD() throws InterruptedException {
        return
                given().
                        header("Content-Type", "application/json").
                        body().
                        when().
                        post("api/v1/projects/").
                        then().
                        extract().
                        path("session.value");
    }
}
